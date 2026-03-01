import { Button, Stack, TextField, Typography } from "@mui/material";

export default function Form() {
  return (
    <Stack margin={"100px"} gap={"10px"}>
      <Typography
        sx={{ fontSize: "2rem", textAlign: "center", fontWeight: "bold" }}
      >
        Got a Project? Let's talk
      </Typography>
      <Typography
        sx={{
          color: "#D88684",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Get a Quote Immediately Upon Form Submission
      </Typography>

      <Stack
        width={"60vw"}
        gap={"10px"}
        alignItems={"center"}
        margin={"30px auto"}
      >
        <Stack
          direction={"row"}
          sx={{
            width: "100%",
          }}
          justifyContent={"center"}
          gap={"20px"}
        >
          <TextField
            variant="outlined"
            label="First name"
            sx={{
              width: "50%",
            }}
          />
          <TextField
            variant="outlined"
            label="Last name"
            sx={{
              width: "50%",
            }}
          />
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          gap={"20px"}
          sx={{
            width: "100%",
          }}
        >
          <TextField
            variant="outlined"
            label="Email address"
            sx={{
              width: "50%",
            }}
          />
          <TextField
            variant="outlined"
            label="Phone"
            sx={{
              width: "50%",
            }}
          />
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          gap={"20px"}
          sx={{
            width: "100%",
          }}
        >
          <TextField
            variant="outlined"
            label="Company name"
            sx={{
              width: "50%",
            }}
          />
          <TextField
            variant="outlined"
            label="Category"
            sx={{
              width: "50%",
            }}
          />
        </Stack>
        <TextField
          multiline
          rows={4}
          maxRows={4}
          label="Message"
          sx={{
            width: "100%",
          }}
        />
      </Stack>
      <Button
        variant="contained"
        sx={{ width: "200px", margin: "auto", backgroundColor: "black" }}
      >
        Send Request
      </Button>
    </Stack>
  );
}
