"use client";

import { useState } from "react";
import { Dialog, DialogContent, Stack, Box, TextField, Button, FormGroup, FormControlLabel, Checkbox, Typography, Alert, IconButton, InputAdornment } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";

export default function CreateSubAdmin({ setViewForm, fetchUsers }) {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "subadmin" });
  const [permissions, setPermissions] = useState({ blogs:false, events:false, seo_meta_tags:false, careers:false, hiring_data:false, contact_details:false, newsletter_subscribers:false });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value});
  const handlePermissionChange = e => setPermissions({...permissions, [e.target.name]: e.target.checked});

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const selectedPermissions = Object.keys(permissions).filter(p => permissions[p]);
    try {
      const res = await axios.post("https://skytextiles.in/api/v1/user/register", {...formData, permissions: selectedPermissions}, { headers: { "Content-Type":"application/json" }});
      if(res.status === 200 || res.status === 201) {
        setAlert({type:"success", message:"Sub-admin created successfully!"});
        setFormData({ name: "", email: "", password: "", role: "subadmin" });
        setPermissions({ blogs:false, events:false, seo_meta_tags:false, careers:false, hiring_data:false, contact_details:false, newsletter_subscribers:false });
        fetchUsers();
        setViewForm(false);
      } else setAlert({type:"error", message:"Failed to create sub-admin."});
    } catch(err) {
      console.error(err);
      setAlert({type:"error", message: err.response?.data?.message || err.message });
    } finally { setLoading(false); }
  };

  return (
    <Dialog open fullWidth maxWidth="md">
      <DialogContent sx={{ position:"relative", p:4 }}>
        <IconButton onClick={()=>setViewForm(false)} sx={{ position:"absolute", top:8, right:8 }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" sx={{ mb:3, fontWeight:"bold" }}>Create Sub-Admin</Typography>
        {alert.message && <Alert severity={alert.type} sx={{ mb:2 }}>{alert.message}</Alert>}
        <Box component="form" onSubmit={handleSubmit}>
          <Stack direction={{ xs:"column", md:"row" }} spacing={3}>
            <Stack spacing={2} flex={1}>
              <TextField label="Full Name" name="name" value={formData.name} onChange={handleChange} required fullWidth size="small" />
              <TextField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required fullWidth size="small" />
              <TextField label="Role" name="role" value={formData.role} disabled fullWidth size="small" />
            </Stack>
            <Stack spacing={2} flex={1}>
              <TextField label="Password" name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} required fullWidth size="small" InputProps={{
                endAdornment:(
                  <InputAdornment position="end">
                    <IconButton size="small" onClick={()=>setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                )
              }} />
            </Stack>
          </Stack>

          <Typography variant="subtitle1" sx={{ mt:3, mb:1, fontWeight:600 }}>Assign Access Permissions:</Typography>
          <FormGroup sx={{ display:"flex", flexDirection:"row", flexWrap:"wrap", gap:2 }}>
            {Object.keys(permissions).map(perm=>(
              <FormControlLabel key={perm} control={<Checkbox name={perm} checked={permissions[perm]} onChange={handlePermissionChange} />} label={perm.replace(/_/g," ").toUpperCase()} />
            ))}
          </FormGroup>

          <Stack direction="row" spacing={2} sx={{ mt:3 }}>
            <Button type="submit" variant="contained" sx={{ backgroundColor:"#61aa70", "&:hover":{backgroundColor:"#4b8b5a"} }} disabled={loading}>
              {loading ? "Creating..." : "Create"}
            </Button>
            <Button variant="outlined" onClick={()=>setViewForm(false)}>Cancel</Button>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
