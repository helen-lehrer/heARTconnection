import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import type { GetStaticProps, NextPage } from "next";
import { Character, GetCharacterResults } from "../../types";

const Home: NextPage<{characters: Character[]}> = ({characters}) => {
  return (
    <div>
      <Head>
        <title>heARTconnection</title>
      </Head>
      {characters.map((character) => {
        return <div key={character.id}>{character.name}
        <Image
          src={character.image}
          alt={character.name}
          width="200"
          height="200"
        />
        </div>
      })}
    </div>
  );
};

//this will run at build time
export const getStaticProps: GetStaticProps = async (context) => {
const res = await fetch("https://rickandmortyapi.com/api/character")
const { results }: GetCharacterResults = await res.json();

return {
  props: {
    characters:results,
    },
  };
};

//this will run at runtime
export default Home; 