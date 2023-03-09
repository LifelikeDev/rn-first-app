import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const ApiCallComp = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    // api call
    const getDataFromApi = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data) {
        setApiData(
          data.users.map((user) => `${user.firstName} ${user.lastName}`)
        );
      }
    };

    getDataFromApi();
  }, []);

  console.log(apiData);

  return (
    <View>
      <Text>Api Data</Text>
    </View>
  );
};

export default ApiCallComp;
