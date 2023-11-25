import React from "react";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

function feedback() {
  async function sendFeedback(e) {
    e.preventDefault();
      const response = await fetch(
        "https://isdl-backend-2-maanas2403.vercel.app/sendFeedback?",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            hall: e.target.hall.value,
            star: e.target.star.value,
            issue: e.target.issue.value,
          }),
        }
      );
      if (response.status == 200) {
        alert("Feedback sent");
      } else {
        alert("Something went wrong !!");
      }
  }
  return (
    <Box display="flex" justifyContent={"center"}>
      <Box
        width="1000px"
        height="500px"
        bg="#ffffe5"
        display="flex"
        marginTop={"200px"}
        boxShadow={"15px  10px 10px #555555"}
        border={"2px solid black"}
        borderRadius={"20px"}
      >
        <Box
          marginRight={"50px"}
          bg="#b5e5c3"
          borderRadius={"20px 0px 0px 20px"}
          padding="30px"
          paddingTop="100px"
          width="40%"
        >
          <Image src="hall.png"></Image>
        </Box>
        <Box
          padding={"10px"}
          paddingTop={"80px"}
          display="flex"
          flexDirection={"column"}
          width={"45%"}
        >
          <form onSubmit={sendFeedback} width={"100%"}>
            <Text fontSize={"50px"} as="b">
              Feedback
            </Text>

            <FormControl width={"100%"}>
              <FormLabel>Hall</FormLabel>
              <Input name="hall"  placeholder="Hall Id" />
              <FormLabel>Rate</FormLabel>
              <Input name="star"type="number"  placeholder="(0-5)"  />
              <FormLabel>Issue</FormLabel>
              <Input name="issue" />
            </FormControl>
            <Button
              border="2px solid black"
              width="100%"
              marginTop="30px"
              bg={"#ff9800"}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default feedback;
