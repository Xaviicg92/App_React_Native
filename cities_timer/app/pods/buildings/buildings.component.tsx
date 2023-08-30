import React from "react";
import { ScrollView, View } from "react-native";
import { Avatar, Button, List, Text } from "react-native-paper";
import { milisecToMin } from "../../common/milisecToMin";
import { MyContext } from "../../common/myContext";
import { getBuildings } from "./api/buildings.api";
import { mapFromBuildApiToBuildVm } from "./buildings.mapper";

interface Props {
  navigation: any;
}

export const BuildingsComponent = (props: Props) => {
  const { navigation } = props;
  const [buildings, setBuildings] = React.useState([]);
  const [userBuildings, setUserBuildings] = React.useState(undefined);

  const userContext = React.useContext(MyContext);

  const handleOnPress = (url_image: string, id_building: string) => {
    userContext.setCurrentImage(url_image);
    userContext.setCurrentIdBuilding(id_building);
    navigation.navigate(`${userContext.name}´s city`);
  };

  React.useEffect(() => {
    getBuildings(userContext.id)
      .then((res) => {
        // const buildingsVm = mapFromBuildApiToBuildVm(res);
        const { buildings, user_buildings } = res;
        setBuildings(buildings);
        setUserBuildings(user_buildings);
      })
      .catch((err) => console.log(err));
  }, [userContext.time]);

  console.log(userBuildings);

  // console.log(buildings);
  return (
    <ScrollView>
      {buildings && userBuildings ? (
        buildings.map((build, index) => (
          <List.Item
            style={{ backgroundColor: "rgb(234,221,187)", margin: 5 }}
            key={build._id}
            title={build.name}
            description={`${milisecToMin(userBuildings[index].user_time)} of ${
              build.totalTime
            } minutes`}
            left={(props) => {
              if (build.name === "Big Ben") {
                build.url_image = "bigben";
                return (
                  <Avatar.Image
                    size={100}
                    source={require("../../../assets/bigben.png")}
                  />
                );
              } else if (build.name === "Eiffel Tower") {
                build.url_image = "eiffel_tower";
                return (
                  <Avatar.Image
                    size={100}
                    source={require("../../../assets/eiffel_tower.png")}
                  />
                );
              } else if (build.name === "Lady Liberty") {
                build.url_image = "statue_liberty";
                return (
                  <Avatar.Image
                    size={100}
                    source={require("../../../assets/statue_liberty.png")}
                  />
                );
              } else if (build.name === "Colliseum") {
                build.url_image = "colliseum";
                return (
                  <Avatar.Image
                    size={100}
                    source={require("../../../assets/colliseum.png")}
                  />
                );
              } else if (build.name === "Tower of Pisa") {
                build.url_image = "tower_pisa";
                return (
                  <Avatar.Image
                    size={100}
                    source={require("../../../assets/tower_pisa.png")}
                  />
                );
              } else if (build.name === "Pyramids of Egypt") {
                build.url_image = "pyramids_egypt";
                return (
                  <Avatar.Image
                    size={100}
                    source={require("../../../assets/pyramids_egypt.png")}
                  />
                );
              }
            }}
            right={() => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Button
                  style={{
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => handleOnPress(build.url_image, build._id)}
                  textColor="#3b8ea5"
                >
                  Build it!
                </Button>
              </View>
            )}
          />
        ))
      ) : (
        <Text>Loading</Text>
      )}
    </ScrollView>
  );
};
