import pokemon from "../../client/js/reducers/pokemon-reducer.js";

const state = {
    pokemons: [],
    loading: false,
    loaded: false,
    error: null
}

describe("Pokemon Reducer", () => {
    test("LOAD_POKEMON_PENDING", () => {
        const action = {
            type: "LOAD_POKEMON_PENDING"
        }
        const newState = {
            pokemons: [],
            loading: true,
            loaded: false,
            error: null
        };
        expect(pokemon(state, action)).toEqual(newState);
    });

    test("LOAD_POKEMON_REJECTED", () => {
        const action = {
            type: "LOAD_POKEMON_REJECTED",
            payload: {
                message: "Network Error"
            }
        }
        const newState = {
            pokemons: [],
            loading: false,
            loaded: false,
            error: "Network Error"
        };
        expect(pokemon(state, action)).toEqual(newState);
    });

    test("LOAD_POKEMON_FULFILLED", () => {
        const action = {
            type: "LOAD_POKEMON_FULFILLED",
            payload: {
                data: {
                    results: [
                        {id: "1", name:"pikachu"}
                    ]
                }
            }
        }
        const newState = {
            pokemons: [
                {id: "1", name:"pikachu"}
            ],
            loading: false,
            loaded: true,
            error: null
        };
        expect(pokemon(state, action)).toEqual(newState);
    });
});