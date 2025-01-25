import {getClient} from "@/services";
import {INFO_CHARACTERS} from "@/services/queries";
import {Character} from "@/utils/types";
import {CharsSlider} from "@/app/characters/components/CharsSlider";
import {Title} from "@/components/text";

export const revalidate = 30
export default async function Characters() {
  const { data, error } = await getClient().query({ query: INFO_CHARACTERS, variables: {
    page: 1,
  }});

  const characters = data.characters.results as Character[]

  return (
    <main>
      {
        error ? ( 
          <p>an error occurred...</p>
        ) : (
          <>
            <Title text={"Characters"}/>
            <CharsSlider initialData={characters}/>
          </>
        )
      }
    </main>
  );
}