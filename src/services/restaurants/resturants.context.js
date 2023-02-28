import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo
} from "react";

import {
  restaurantsRequest,
  restaurantsTransform
} from "./resturants.services";

export const RestaurantsContext = createContext();
import { LocationContext } from "../location/location.context";

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((result) => {
          setIsLoading(false);
          setRestaurants(result);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  // componentDidMount
  useEffect(() => {
    if (location) {
      const locationGotIt = `${location.lat},${location.lng}`;
      // console.log({ locationGotIt });
      retrieveRestaurants(locationGotIt);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
