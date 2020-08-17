import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import App from "./App";

jest.mock("./api/fetchShow");
console.log(mockFetchShow)
