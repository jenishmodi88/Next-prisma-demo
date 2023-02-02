import { Dialog, DialogActions, DialogContent, TextField } from "@mui/material";
import * as yup from "yup";
import { Form, Formik } from "formik";
import axios from "axios";
import { CustomDialogTitle } from "../theme/component/Dialog";
import { CustomButton } from "../theme/component/Button";
import { useEffect } from "react";

const UsreFormDialog = ({ openDialog, handleCloseDialog, isEdit, data }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Name must be required"),
    username: yup.string().required("User Name must be required"),
    email: yup.string().email().required("Email must be required"),
    phone: yup.string().required("Phone Number must be required"),
    website: yup.string().url().required("Website URL must be required"),
    companyName: yup.string().required("Company Name must be required"),
  });

  return (
    <Dialog
      open={openDialog}
      onClose={handleCloseDialog}
      fullWidth
      maxWidth="sm"
    >
      <CustomDialogTitle>Add User Details</CustomDialogTitle>
      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          phone: "",
          website: "",
          companyName: "",
        }}
        onSubmit={async (values) => {
          if (isEdit) {
            try {
              await axios.put(
                `http://localhost:3000/api/edit/${data.id}`,
                values
              );
            } catch (err) {
              console.log(err);
            }
          } else {
            try {
              await axios.post("http://localhost:3000/api/create", values);
            } catch (err) {
              console.log(err);
            }
          }
          handleCloseDialog();
        }}
        validationSchema={schema}
      >
        {({ values, errors, touched, handleChange, handleBlur, setValues }) => {
          useEffect(() => {
            if (isEdit) {
              setValues(data);
            }
          }, []);

          return (
            <Form>
              <DialogContent>
                <TextField
                  margin="dense"
                  id="name"
                  name="name"
                  type="text"
                  label="Name"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
                <TextField
                  margin="dense"
                  id="username"
                  name="username"
                  type="text"
                  label="User Name"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
                <TextField
                  margin="dense"
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  margin="dense"
                  id="phone"
                  name="phone"
                  type="tel"
                  label="Phone No."
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
                <TextField
                  margin="dense"
                  id="website"
                  name="website"
                  type="url"
                  label="Website URL"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.website}
                  error={touched.website && Boolean(errors.website)}
                  helperText={touched.website && errors.website}
                />
                <TextField
                  margin="dense"
                  id="companyName"
                  name="companyName"
                  type="text"
                  label="Company Name"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.companyName}
                  error={touched.companyName && Boolean(errors.companyName)}
                  helperText={touched.companyName && errors.companyName}
                />
              </DialogContent>
              <DialogActions>
                <CustomButton onClick={handleCloseDialog}>Cancel</CustomButton>
                <CustomButton type="submit">
                  {isEdit ? "Edit" : "Submit"}
                </CustomButton>
              </DialogActions>
            </Form>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default UsreFormDialog;
