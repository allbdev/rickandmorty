"use client"
import Image from "next/image";
import Link from "next/link";

import {Character, CharacterFullInfo, Episode, SliderItemCharacterProps} from "@/utils/types";

import {Container} from "@/components/Container";
import {Title} from "@/components/text";
import {FaExternalLinkAlt} from "react-icons/fa";

const statusBullet = (status: string) => `mb-[6px] flex flex-row items-center before:mr-[5px] before:content-[''] before:w-[7px] before:h-[7px] before:rounded-[10px] ${status === 'Dead' ? 'before:bg-[red]' : status === 'Alive' ? 'before:bg-[green]' : 'before:bg-[orange]'}`

export const CharacterCard = ({
                                id,
                                name,
                                image,
                                species,
                                status,
                                gender,
                                type,
                                location
                              }: Character) => {
  const {name: localName} = location

  return (
    <article className={'flex flex-col bg-gray-2 rounded-md'}>
      <div className={'relative h-[250px]'}>
        <Image
          src={image}
          alt={name}
          fill={true}
          className={'object-cover object-center rounded-t-md'}
        />
      </div>
      <div className={'flex flex-col p-[8px]'}>
        <Link
          className={'w-fit'}
          href={`/characters/${id}`}
        >
          <h3 className={'w-fit'}>{name}</h3>
        </Link>
        <div className={`${statusBullet(status)}`}>
          <p
            title={`${status} - ${species}, ${gender}`}
            className={`flex-1 capitalize text-[.8rem] text-ellipsis overflow-hidden whitespace-nowrap`}
          >
            {status} - {species}, {gender}
          </p>
        </div>
        {
          (!!type && type.length > 0) && (
            <div className={'mb-[6px]'}>
              <p className={'text-[.7rem] text-[gray]'}>Considers as:</p>
              <p>- {type}</p>
            </div>
          )
        }
        <div>
          <p className={'text-[.7rem] text-[gray]'}>Last location:</p>
          <p>- {localName}</p>
        </div>
      </div>
    </article>
  )
}

export const SliderItemCharacter = ({
                                      id,
                                      name,
                                      image,
                                      species,
                                      status,
                                      gender,
                                      type,
                                      location,
                                      episode,
                                      customMargin = '0'
                                    }: SliderItemCharacterProps) => {
  const {name: localName} = location

  const episodes = (episode || []).slice(0, 10) as Episode[]

  return (
    <section className={`mb-[${customMargin}]`}>
      <Container className={'bg-gray-2 p-[10px] gap-[10px] rounded-md'}>
        <h2 className={'text-center mb-[10px]'}>{name}</h2>
        <div className={'flex flex-row flex-wrap gap-[1rem] justify-center'}>
          <div className={'relative h-[200px] w-[200px]'}>
            <Image
              src={image}
              alt={name}
              fill={true}
              className={'object-cover object-center rounded-sm'}
            />
          </div>
          <div className={'flex-1'}>
            <div className={`${statusBullet(status)}`}>
              <p
                title={`${status} - ${species}, ${gender}`}
                className={`flex-1 capitalize text-ellipsis overflow-hidden whitespace-nowrap`}
              >
                {status} - {species}, {gender}
              </p>
            </div>
            {
              (!!type && type.length > 0) && (
                <div className={'mb-[6px]'}>
                  <p className={'text-[.8rem] text-[gray]'}>Considers as:</p>
                  <p>- {type}</p>
                </div>
              )
            }
            <div className={'mb-[6px]'}>
              <p className={'text-[.8rem] text-[gray]'}>Last location:</p>
              <p>- {localName}</p>
            </div>
            {
              episodes.length > 0 && (
                <div className={'mb-[6px]'}>
                  <p className={'text-[.8rem] text-[gray]'}>Episodes:</p>
                  <p>
                    {
                      episodes.map((episode, index) => {
                        return (
                          <span key={index}>
                            {episode.name}{index === episodes.length - 1 ? '' : ', '}
                          </span>
                        )
                      })
                    }
                  </p>
                </div>
              )
            }
            <Link
              className={'w-fit flex flex-row items-center flex-wrap gap-[5px]'}
              href={`/characters/${id}`}
            >
              See more <FaExternalLinkAlt size={12}/>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export const FullInfoCharacterCard = ({
                                        name,
                                        species,
                                        status,
                                        gender,
                                        origin,
                                        episode,
                                        image,
                                        type,
                                        location
                                      }: CharacterFullInfo) => {
  const {name: localName, dimension: localDimension, type: localType} = location
  const {name: originName, type: originType, dimension: originDimension} = origin
  const episodes = episode || []

  return (
    <>
      <Title text={name}/>
      <Container className={'bg-gray-1 rounded-lg p-[1.5rem]'}>
        <div className={'flex flex-col gap-[2rem] items-center'}>
          <div className={'flex flex-row flex-wrap gap-[2rem] items-center justify-center w-full'}>
            <div className={'relative h-[300px] w-[300px] max-w-full'}>
              <Image
                src={image}
                alt={name}
                fill={true}
                className={'object-cover object-center rounded-sm'}
              />
            </div>
            <div>
              <div className={`${statusBullet(status)}`}>
                <p
                  title={`${status} - ${species}, ${gender}`}
                  className={`flex-1 capitalize text-ellipsis overflow-hidden whitespace-nowrap`}
                >
                  {status} - {species}, {gender}
                </p>
              </div>
              {
                (!!type && type.length > 0) && (
                  <div className={'mb-[6px]'}>
                    <p className={'text-[.8rem] text-[gray]'}>Considers as:</p>
                    <p>- {type}</p>
                  </div>
                )
              }
              <div className={'mb-[6px]'}>
                <p className={'text-[.8rem] text-[gray]'}>Origin info:</p>
                <p>- Name: {originName}</p>
                <p>- Type: {originType}</p>
                <p>- Dimension: {originDimension}</p>
              </div>
              <div className={'mb-[6px]'}>
                <p className={'text-[.8rem] text-[gray]'}>Last location info:</p>
                <p>- Name: {localName}</p>
                <p>- Type: {localType}</p>
                <p>- Dimension: {localDimension}</p>
              </div>
            </div>
          </div>
          {
            episodes.length > 0 && (
              <div className={'flex-1 w-full'}>
                <p className={'text-[.8rem] text-[gray]'}>Episodes:</p>
                <ul>
                  {
                    episodes.map((episode, index) => {
                      return (
                        <li key={index}>
                          {episode.episode} - {episode.name}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          }
        </div>
      </Container>
    </>
  )
}