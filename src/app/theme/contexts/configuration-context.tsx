import { createContext } from "react";
import configuration from "../configuration/configuration";

const ConfigurationContext = createContext(configuration);

export default ConfigurationContext;