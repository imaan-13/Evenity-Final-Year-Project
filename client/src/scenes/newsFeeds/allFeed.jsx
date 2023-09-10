
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
// import PostWidget from "scenes/widgets/PostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import EventPostsWidget from "scenes/widgets/EventPostsWidget";
import Navbar2 from "scenes/navbar/newsFeedNav";
import NavbarWithProps from "scenes/navbar/communityNewsFeed";
import { Box, useMediaQuery } from "@mui/material";

import { useSelector } from "react-redux";
const AllNewsFeed =()=>{
  

const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id}  loggedInUser={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
           <MyPostWidget picturePath={picturePath} />
           {/* <Navbar2></Navbar2> */}
           <NavbarWithProps isMain={true}></NavbarWithProps>
          <PostsWidget isProfile={false}/> 
          <EventPostsWidget isProfile={false}></EventPostsWidget>
 {/* <PostsWidget />  */}
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            {/* <AdvertWidget /> */}
            <Box m="2rem 0" />
            {/* <FriendListWidget userId={_id} /> */}
          </Box>
        )}
      </Box>
    </Box>
  );
};



export default AllNewsFeed;