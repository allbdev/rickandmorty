import {getClient} from "@/services";
import {INFO_LOCATIONS} from "@/services/queries";
import {LocationProps} from "@/utils/types";
import {LocationsSlider} from "@/app/locations/components/LocationsSlider";
import {Title} from "@/components/text";

export const revalidate = 30 

export default async function Locations() {
  const { data, error } = await getClient().query({ query: INFO_LOCATIONS, variables: {
    page: 1,
  }});

  const locations = data.locations.results as LocationProps[]

  return (
    <main>
      {
        error ? (
          <p>an error occurred...</p>
        ) : (
          <>
            <Title text={"Locations"}/>
            <LocationsSlider initialData={locations}/>
          </>
        )
      }
    </main>
  );
}