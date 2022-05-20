import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
// import { Card } from 'react-native-shadow-cards';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Card>
          {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
          <Card.Content>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Title style={{ color: 'orange' }}>Orange Lunch ODC in Sierra Leone</Title>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut voluptate natus eius corporis obcaecati veritatis cum rerum animi
            nemo assumenda iure beatae eum, earum asperiores facilis pariatur optio
            dignissimos fugiat aspernatur suscipit laboriosam quidem! Magnam numquam
            doloribus nemo debitis. Facilis.</Paragraph>
          <Card.Actions>
            <Button styles={{ color: '#FF4949' }}>Read</Button>
          </Card.Actions>


          {/* blog 2 */}
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Title>Orange SL Fighting against Corruuption</Title>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut voluptate natus eius corporis obcaecati veritatis cum rerum animi
            nemo assumenda iure beatae eum, earum asperiores facilis pariatur optio
            dignissimos fugiat aspernatur suscipit laboriosam quidem! Magnam numquam
            doloribus nemo debitis. Facilis.</Paragraph>

          <Card.Actions>
            <Button>Read</Button>
          </Card.Actions>
          {/* Blog 3 */}

          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Title>Orange Lunch New Promotion</Title>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut voluptate natus eius corporis obcaecati veritatis cum rerum animi
            nemo assumenda iure beatae eum, earum asperiores facilis pariatur optio
            dignissimos fugiat aspernatur suscipit laboriosam quidem! Magnam numquam
            doloribus nemo debitis. Facilis.</Paragraph>
          <Card.Actions>
            <Button>Read</Button>
          </Card.Actions>

        </Card>
      </View>
    </ScrollView>
  );
}
