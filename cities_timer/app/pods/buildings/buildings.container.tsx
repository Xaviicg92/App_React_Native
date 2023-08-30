import { useNavigation } from "@react-navigation/native";
import { BuildingsComponent } from "./buildings.component";

export const BuildingsContainer = () => {
  const navigation = useNavigation();
  return <BuildingsComponent navigation={navigation} />;
};
