import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";

const ApiCallComp = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // api call
    const getDataFromApi = async () => {
      setLoading(true);

      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data) {
        setApiData(
          data.users.map((user) => `${user.firstName} ${user.lastName}`)
        );
        setLoading(false);
      }
    };

    getDataFromApi();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#282872" />
      </View>
    );
  }

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
