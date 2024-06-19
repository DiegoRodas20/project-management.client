import { createContext } from "react";
import configuration from "../theme/configuration";

const ConfigurationContext = createContext(configuration);

export default ConfigurationContext;