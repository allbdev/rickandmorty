import {getClient} from "@/services";
import {INFO_CHARACTER} from "@/services/queries";

import {CharacterFullInfo} from "@/utils/types";

import {FullInfoCharacterCard} from "@/components/CharacterCard";

export const revalidate = 30

export default async function Character({ params }: { params: { id: number } }) {
  // try {
  //
  // } catch (e) {
  //   To see GraphQl Error
  //   console.log(e.networkError.result.errors)
  // }
  const { data, error } = await getClient().query({ query: INFO_CHARACTER, variables: {
      id: params.id
    }});

  const character = data.character as CharacterFullInfo

  return (
    <main>
      {
        error ? (
          <p>an error occurred...</p>
        ) : (
          <FullInfoCharacterCard {...character}/>
        )
      }
    </main>
  );
}