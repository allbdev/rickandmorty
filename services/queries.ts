import { gql } from "@apollo/client";

const INFO_CHARACTERS = gql`
  query($page: Int, $name: String) {
    characters(page: $page, filter: {name: $name}) {
      info {
        count,
        pages,
        next,
        prev
      }
      results {
        id,
        name,
        species,
        gender,
        image,
        status,
        type,
        location {
          id,
          name
        },
        episode {
          id,
          name
        }
      }
    }
  }
`;

const INFO_CHARACTER = gql`
  query($id: ID!) {
    character(id: $id) {
      id,
      name,
      status,
      species,
      type,
      gender,
      origin {
        id,
        name,
        dimension,
        type
      },
      location {
        id,
        name,
        type,
        dimension
      },
      image,
      episode {
        id,
        name,
        episode,
        air_date
      }
    }
  }
`;

const INFO_LOCATIONS = gql`
  query($page: Int, $name: String) {
    locations(page: $page, filter: {name: $name}) {
      info {
        count,
        pages,
        next,
        prev
      }
      results {
        id,
        name,
        type,
        dimension,
        residents {
          id,
          name,
          status,
          species,
          type
        }
      }
    }
  }
`;

export {INFO_CHARACTERS, INFO_CHARACTER, INFO_LOCATIONS};