import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-res-info";
export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
};
