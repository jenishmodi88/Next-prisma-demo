import { useState } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import prisma from "../../lib/prisma";
import { CustomButton } from "../../theme/component/Button";
import DeleteUser from "../../components/DeleteUser";
import EditUser from "../../components/EditUser";
import UsreFormDialog from "../../components/UsreFormDialog";

export default function Product({ allUsers }) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 170,
    },
    {
      field: "username",
      headerName: "User Name",
      width: 200,
    },
    {
      field: "email",
      headerName: "Email",
      width: 300,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 250,
    },
    {
      field: "website",
      headerName: "Website",
      width: 230,
    },
    {
      field: "companyName",
      headerName: "Company Name",
      width: 220,
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 70,
      renderCell: (data) => <EditUser data={data.row}  />,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 70,
      renderCell: (data) => <DeleteUser id={data.id} />,
    },
  ];

  return (
    <div>
      <Head>
        <title>CRUD Functionality</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <Box className="mt-10 flex items-end justify-between">
          <Typography className="leading-none text-indigo-500 text-xl font-black">
            User
          </Typography>
          <CustomButton variant="contained" onClick={handleClickOpenDialog}>
            Add User
          </CustomButton>
        </Box>
        <Box sx={{ height: 371 }} className="w-full mt-2">
          <DataGrid
            rows={JSON.parse(allUsers)}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </Box>
        <UsreFormDialog openDialog={openDialog} handleCloseDialog={handleCloseDialog} isEdit={false} data={null}/>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const users = await prisma.user.findMany();
  const allUsers = JSON.stringify(users, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );
  return {
    props: { allUsers },
  };
};
