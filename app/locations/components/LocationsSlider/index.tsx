"use client"
import {useCallback, useEffect, useRef, useState} from "react";
import {FaSearch} from "react-icons/fa";
import {useDebouncedCallback} from "use-debounce";
import InfiniteScroll from "react-infinite-scroll-component";

import {INFO_LOCATIONS} from "@/services/queries";
import client from "@/services/clientSideRequest";

import {LocationProps, LocationsSliderProps} from "@/utils/types";

import {Container} from "@/components/Container";
import {LocationSliderCard} from "@/components/LocationCard";

export const LocationsSlider = ({initialData}: LocationsSliderProps) => {
  const [data, setData] = useState<LocationProps[]>(initialData)
  const [page, setPage] = useState(2)
  const [searchTerm, setSearchTerm] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const fetchData = useCallback(async (paramPage?: number, paramSearch?: string) => {
    const { data, error } = await client.query({ query: INFO_LOCATIONS, variables: {
        page: paramPage ?? page,
        name: paramSearch ?? searchTerm
      }});

    if (error) {
      return
    }

    const locations = data.locations.results as LocationProps[]
    const {next, prev: prevFromReq} = data.locations.info

    setData(prev => prevFromReq === null ? locations : ([...prev, ...locations]))
    setPage(next)
  }, [page, searchTerm, setData, setPage])

  const debounced = useDebouncedCallback((value: string) => {
    setSearchTerm(value)
    setPage(1)
    fetchData(1, value)
  }, 500)

  useEffect(() => {
    if (!!inputRef.current) {
      if (showSearch) {
        inputRef.current.focus()
      } else {
        inputRef.current.blur()
      }
    }
  }, [showSearch]);

  return (
    <>
      <Container className={'flex flex-row gap-[2rem] items-center mb-[3rem] justify-end'}>
        <input
          ref={inputRef}
          onChange={(e) => debounced(e.target.value)}
          placeholder="Enter a location's name"
          className={`bg-transparent flex-1 max-w-[300px] border-b border-white !outline-none px-[10px] pb-[3px] pt-[0] transition-all ${showSearch ? 'opacity-100' : 'opacity-0'}`}
        />
        <button
          onClick={() => setShowSearch(prev => !prev)}
          className={'bg-transparent !border-none !outline-none'}
        >
          <FaSearch size={20}/>
        </button>
      </Container>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={!!page}
        loader={
          <p className={'text-center my-[2rem]'}>
            <b>Loading...</b>
          </p>
        }
        endMessage={
          <p className={'text-center my-[2rem]'}>
            <b>{"That's"} all folks!</b>
          </p>
        }
      >
        {
          data.map((location, index) => (
            <LocationSliderCard key={index} customMargin={index === data.length - 1 ? '0' : '8rem'} {...location}/>
          ))
        }
      </InfiniteScroll>
    </>
  )
}