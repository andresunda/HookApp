import React from 'react'
import { useFetch } from '../hooks'
import { useCounter } from '../hooks/useCounter';
import { LoadingState } from './LoadingState';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {
    const { counter, decrement, increment } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1>Informacion del pokemon</h1>
            <hr />
            {isLoading
                ?
                <LoadingState />
                : (
                    <PokemonCard
                        id={counter}
                        name={data?.name}
                        sprites={[
                            data?.sprites?.front_default,
                            data?.sprites?.front_shiny,
                            data?.sprites?.back_defatul,
                            data?.sprites?.back_shiny,
                        ]
                        }
                    />)
            }

            <h2>{data?.name}</h2>

            <button
                onClick={() => counter > 1 ? decrement() : null}
                className='btn btn-primary mt-2'>
                Anterior
            </button>
            <button
                onClick={() => increment()}
                className='btn btn-secondary mt-2'
                disabled={isLoading}
            >
                Siguiente
            </button>
        </>
    )
}
