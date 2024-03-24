import {INFO_CHARACTERS} from "@/services/queries";
import {getClient} from "@/services";
import {Container} from "@/components/Container";
import {Character} from "@/utils/types";
import {CharacterCard} from "@/components/CharacterCard";
import {randomNumber, shuffleArray} from "@/utils/utils";
import Link from "next/link";
import {Title} from "@/components/text";

export const revalidate = 30
export default async function Home() {
  const { data, error } = await getClient().query({ query: INFO_CHARACTERS, variables: {
    page: randomNumber(1, 20)
  }});

  const characters = shuffleArray(data.characters.results.slice(0, 8)) as Character[]

  return (
    <main>
      {
        error ? (
            <p>an error occurred...</p>
        ) : (
          <>
            <Title text={'Welcome to the universe of Rick and Morty'}/>
            <section className={'bg-gray-1 w-full py-[3rem] mb-[8rem]'}>
              <h2 className={'text-center mb-[2rem]'}>Summary</h2>
              <Container>
                <p>
                  Rick and Morty is an animated series that follows the adventures and discoveries of a super scientist
                  and his not-so-bright grandson. Completely irresponsible, Rick is not a loving and kind grandfather.
                  Quite the opposite, he uses his grandson, Morty, as a guinea pig in his experiments and disregards the
                  young {`boy's`} safety in his intergalactic adventures. But even with various misunderstandings, the
                  two
                  have fun discovering incredible places and terrifying creatures through unknown universes and
                  galaxies.
                  In addition to the two, the series also follows other members of the family: Beth, {`Morty's`} mother
                  and
                  {`Rick's`} daughter with whom he has a complicated relationship, Jerry, {`Rick's`} son-in-law whom he
                  feels
                  contempt for, and Summer, {`Morty's`} older sister who also accompanies her brother and grandfather on
                  their adventures. While facing unimaginable dangers, the Smith family ends up discovering a lot about
                  each other.
                </p>
              </Container>
            </section>
            <section className={'bg-gray-1 w-full py-[3rem] mb-[8rem]'}>
              <h2 className={'text-center mb-[2rem]'}>Characters</h2>
              <Container
                className={'grid gap-x-[1rem] gap-y-[1rem] grid-cols-1 md:gap-x-[4rem] sm:grid-cols-2 md:grid-cols-4'}>
                {
                  characters.map((character, index) => (
                    <CharacterCard {...character} key={index}/>
                  ))
                }
              </Container>
              <Container className={'flex justify-end mt-[2rem]'}>
                <Link href={'/characters'} className={'w-fit'}>
                  See all
                </Link>
              </Container>
            </section>
          </>
        )
      }
    </main>
  );
}
