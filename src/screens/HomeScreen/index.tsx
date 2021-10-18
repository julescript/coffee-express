import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ComponentTemplate from "../../components/ComponentTemplate";
import EmptyState from "../../components/EmptyState";
import FullWidthButton from "../../components/FullWidthButton";
import { colors } from "../../constants/palette";

const HomeScreen = (navigation: any) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  //   const homestore = useSelector((state) => state.homeReducer)

  // const callAPI = () => {
  //     setLoading(true)
  //     callapifunctionAXIOS.then(() => {
  //         setLoading(false)
  //     })
  // }

  //   useEffect(() => {
  //     callAPI().then(
  //         store.dispatchc(funtion(data))
  //     )
  //   }, [])

//   // trigger function on each re-render
//   useEffect(() => {
//     // validating changes
//   });

//   // triggered on mount only
//   useEffect(() => {
//     // for setting up initial states (calling apis)
//   }, []);

//   // triggered on changes el observables
//   useEffect(() => {
//     // this will get triggered if loading state is updated OR data state is update
//   }, [loading, data, homestore.type]);

  const populateData = () => {
    if (data.length == 0) {
      setData([
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "First Item",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Second Item",
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Third Item",
        },
      ]);
    } else {
      setData((oldState) => {
        const newState = [...oldState, ...oldState];
        return newState;
      });
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: colors.background,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 15,
      }}
    >
      <Text>{item.title}</Text>
      <FullWidthButton title={"Press Me"} style={{ marginTop: 10 }} />
    </View>
  );

  return data.length > 0 ? (
    <FlatList
      data={data}
      numColumns={1} // inccrease it to make a grid
      renderItem={renderItem}
      keyExtractor={(item) => `${item.id}-julien-${item.title}`}
      refreshing
      onRefresh={populateData}
    />
  ) : (
    <EmptyState
      loading={loading}
      icon={"image"}
      title={"Home sweet home"}
      description={"here you will build your amazing project"}
      actionButton={{
        title: "Populate Data",
        callback: () => {
          populateData();
        },
      }}
      secondaryButton={{
        title: "Reload",
        callback: () => {},
      }}
    />
    // <ComponentTemplate title={"Julien"} style={{flex: 1}}/>
  );
};

export default HomeScreen;
