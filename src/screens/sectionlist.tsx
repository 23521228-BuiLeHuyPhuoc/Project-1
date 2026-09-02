import { View, Text, SectionList,StyleSheet } from 'react-native'
import React from 'react'
const sections = [
  {
    title: 'Điện thoại',
    data: [
      {
        id: 'phone-1',
        title: 'iPhone 15',
        body: 'Điện thoại cao cấp với chip A16 Bionic, camera 48MP và màn hình Super Retina XDR.',
      },
      {
        id: 'phone-2',
        title: 'Samsung Galaxy S24',
        body: 'Smartphone Android với màn hình Dynamic AMOLED 2X và hiệu năng mạnh mẽ.',
      },
      {
        id: 'phone-3',
        title: 'Google Pixel 9',
        body: 'Điện thoại nổi bật với khả năng chụp ảnh và các tính năng AI thông minh.',
      },
      {
        id: 'phone-4',
        title: 'Xiaomi 14',
        body: 'Thiết bị sở hữu camera Leica, chip Snapdragon mạnh và thiết kế nhỏ gọn.',
      },
      {
        id: 'phone-5',
        title: 'OPPO Find X8',
        body: 'Smartphone có thiết kế hiện đại, camera chất lượng cao và sạc nhanh.',
      },
    ],
  },

  {
    title: 'Laptop',
    data: [
      {
        id: 'laptop-1',
        title: 'MacBook Air M3',
        body: 'Laptop mỏng nhẹ với chip Apple M3, thời lượng pin dài và màn hình Liquid Retina.',
      },
      {
        id: 'laptop-2',
        title: 'Dell XPS 13',
        body: 'Laptop Windows cao cấp với thiết kế gọn nhẹ, phù hợp cho công việc và học tập.',
      },
      {
        id: 'laptop-3',
        title: 'ASUS ROG Zephyrus',
        body: 'Laptop gaming mạnh mẽ với GPU hiệu năng cao và màn hình tần số quét lớn.',
      },
      {
        id: 'laptop-4',
        title: 'Lenovo ThinkPad X1',
        body: 'Dòng laptop doanh nghiệp nổi tiếng với bàn phím tốt và độ bền cao.',
      },
      {
        id: 'laptop-5',
        title: 'HP Pavilion',
        body: 'Laptop phổ thông cân bằng giữa hiệu năng, thiết kế và mức giá.',
      },
    ],
  },

  {
    title: 'Phụ kiện',
    data: [
      {
        id: 'accessory-1',
        title: 'AirPods Pro',
        body: 'Tai nghe không dây hỗ trợ chống ồn chủ động và âm thanh không gian.',
      },
      {
        id: 'accessory-2',
        title: 'Apple Watch',
        body: 'Đồng hồ thông minh hỗ trợ theo dõi hoạt động và nhiều tính năng tiện ích.',
      },
      {
        id: 'accessory-3',
        title: 'Logitech MX Master',
        body: 'Chuột không dây dành cho công việc với nhiều nút tùy chỉnh.',
      },
      {
        id: 'accessory-4',
        title: 'Keychron K2',
        body: 'Bàn phím cơ không dây nhỏ gọn, phù hợp cho lập trình và văn phòng.',
      },
      {
        id: 'accessory-5',
        title: 'Anker Power Bank',
        body: 'Pin dự phòng dung lượng lớn, hỗ trợ sạc nhanh cho nhiều thiết bị.',
      },
    ],
  },
];
export default function Sectionlist() {
    const [refreshing, setRefreshing]=React.useState(false);
    const [selectedId,setSelectedId]=React.useState(null);
    const handlePress=(id)=>{
        console.log("Item pressed:", id);
        setSelectedId(id);
    }
    return (
    <View>
      <SectionList
      stickySectionHeadersEnabled
      ListHeaderComponent={<Text>Section List Header</Text>}
      ListFooterComponent={<Text>Section List Footer</Text>}
      sections={sections}
      renderItem={({item})=>(
        <View>
            <Text 
            style={{
                ...styles.itemTitle,
                color:item.id===selectedId?"red":"black",
            }}
            
            onPress={()=>handlePress(item.id)} >{item.title}</Text>
            <Text style={styles.itemBody}>{item.body}</Text>
        </View>
      )}
      renderSectionHeader={({section})=>(
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )
      }
      keyExtractor={(item)=>item.id.toString()}
      refreshing={refreshing}
      onRefresh={()=>{
        console.log("refreshing");
        setRefreshing(true);
        setTimeout(()=>{
            setRefreshing(false);
        },2000)


      }}
      />
    </View>
  )
}
const styles=StyleSheet.create({
    
    sectionHeader:{
        fontSize:30,
        fontWeight:"bold",
        color:"red",
    },
    itemTitle:{
        fontSize:20,
        fontWeight:"bold",
    },
    itemBody:{
        fontSize:16,
        color:"gray",
    }
})