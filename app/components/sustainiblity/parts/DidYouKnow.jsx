import { Box, Stack, Typography } from "@mui/material";

export default function DidYouKnow() {
  return (
    <Stack margin={"0 0 100px 0"}>
      <Typography fontSize={"3rem"} textAlign={"center"} fontWeight={"bold"}>
        Did you know that ...
      </Typography>
      <Stack width={"50vw"} margin={"0 auto"}>
        <Stack alignItems={"center"}>
          <Typography fontSize={"5rem"} fontWeight={"bold"} color={"#FB5456"}>
            90%
          </Typography>
          <Typography width={"50%"} textAlign={"center"}>
            Source Organic Cotton As Raw Material For Spinning
          </Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <Typography
            textAlign={"center"}
            fontSize={"5rem"}
            fontWeight={"bold"}
            color={"#9C38F1"}
          >
            1.6 Million
          </Typography>
          <Typography width={"50%"} textAlign={"center"}>
            tons of carpet are disposed of in the EU every year, mostly on
            landfills and in incinerators?
          </Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <Typography fontSize={"5rem"} fontWeight={"bold"} color={"#9C38F1"}>
            50%
          </Typography>
          <Typography width={"50%"} textAlign={"center"}>
            of plastic waste will be recycled for use in new products by 2025,
            as committed by the carpet industry?
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
