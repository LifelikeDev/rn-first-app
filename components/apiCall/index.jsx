import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

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
      <Text style={{ fontSize: 20, fontWeight: 500, marginBottom: 20 }}>
        Api Data
      </Text>

      <View>
        <FlatList
          data={apiData}
          renderItem={(itemData) => (
            <Text key={itemData.index}>{itemData.item}</Text>
          )}
        />
      </View>
    </View>
  );
};

export default ApiCallComp;
