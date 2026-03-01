import { Stack, Typography } from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import {
  NavTableCell,
  NavTableRow,
} from "@/app/styledComponents/admin/NavTable";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const navData = [
  {
    id: 0,
    name: "Blogs",
    link: "/admin/blog",
    icon: ManageAccountsIcon,
    permission: "blogs",
  },
  {
    id: 1,
    name: "Events",
    link: "/admin/event",
    icon: FormatListBulletedIcon,
    permission: "events",
  },
  {
    id: 2,
    name: "Seo Meta tags",
    link: "/admin/seo",
    icon: ShowChartIcon,
    permission: "seo",
  },
  {
    id: 3,
    name: "Careers",
    link: "/admin/careers",
    icon: GroupAddIcon,
    permission: "careers",
  },
  {
    id: 4,
    name: "Hiring Data",
    link: "/admin/hiring-data",
    icon: PictureAsPdfIcon,
    permission: "hiring_data",
  },
  {
    id: 5,
    name: "Contact Details",
    link: "/admin/contact-data",
    icon: ContactsIcon,
    permission: "contact_data",
  },
  {
    id: 6,
    name: "Newsletter Subscribers",
    link: "/admin/newsletter",
    icon: ContactsIcon,
    permission: "newsletter",
  },
  {
    id: 7,
    name: "Create Users",
    link: "/admin/createsubadmin",
    icon: ContactsIcon,
    permission: "create_users",
  },
];

export default function NavbarAdmin() {
  const path = usePathname();
  const router = useRouter();
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    fetchUserPermissions();
  }, []);


const fetchUserPermissions = async () => {
  const token = JSON.parse(localStorage.getItem("UserData"));
  try {
    const response = await axios.get("https://skytextiles.in/api/v1/user/permissions", {
      headers: {
        "Authorization": `Bearer ${token}`, // pass the token
      },
    });

    const data = response.data;

    console.log("=== API Response ===");
    console.log("Full data:", data);
    console.log("Permissions:", data.permissions);
    console.log("Role:", data.role);
    console.log("===================");

    let permissionsArray = data.permissions || [];
    if (typeof permissionsArray === "string") {
      permissionsArray = JSON.parse(permissionsArray);
    }

    setPermissions(permissionsArray);
    setUserRole(data.role);
  } catch (error) {
    console.error("Error fetching permissions:", error.response?.data || error.message);
    setPermissions([]);
  } finally {
    setLoading(false);
  }
};

  const hasPermission = (permission) => {
    if (userRole === "admin") {
      return true;
    }
    return permissions.includes(permission);
  };

  const filteredNavData = navData.filter((item) => hasPermission(item.permission));

  const handleNavigation = (link) => {
    const navItem = navData.find((item) => item.link === link);
    if (navItem && hasPermission(navItem.permission)) {
      router.push(link);
    }
  };

  if (loading) {
    return (
      <Stack
        backgroundColor={"#fff"}
        height={"90vh"}
        width={"300px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography>Loading...</Typography>
      </Stack>
    );
  }

  return (
    <Stack backgroundColor={"#fff"} height={"90vh"} width={"300px"}>
      <Stack backgroundColor={"#89CC97"} alignItems={"center"}>
        <Typography
          sx={{
            width: "fit-content",
            padding: "5px 10px",
            borderRadius: "5px",
            margin: "10px",
            color: "white",
          }}
        >
          Admin Panel
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "white",
            marginBottom: "10px",
          }}
        >
      
        </Typography>
      </Stack>
      <Stack
        sx={{
          overflow: "auto",
        }}
      >
        {filteredNavData.length > 0 ? (
          <table
            style={{
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              {filteredNavData.map((el) => {
                return (
                  <NavTableRow
                    key={el.id}
                    onClick={() => handleNavigation(el.link)}
                    sx={{
                      cursor: hasPermission(el.permission)
                        ? "pointer"
                        : "not-allowed",
                      opacity: hasPermission(el.permission) ? 1 : 0.5,
                    }}
                  >
                    <NavTableCell icon bgColor={path === el.link && "#eee"}>
                      <el.icon width={"50px"} height={"50px"} />
                    </NavTableCell>
                    <NavTableCell bgColor={path === el.link && "#eee"}>
                      {el.name}
                    </NavTableCell>
                  </NavTableRow>
                );
              })}
            </tbody>
          </table>
        ) : (
          <Typography
            sx={{
              padding: "20px",
              textAlign: "center",
              color: "#999",
            }}
          >
            No permissions assigned
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}