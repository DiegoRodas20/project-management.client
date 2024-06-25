import { useContext } from "react"
import ConfigurationContext from "../contexts/configuration-context";

const useConfig = () => useContext(ConfigurationContext)

export default useConfig;