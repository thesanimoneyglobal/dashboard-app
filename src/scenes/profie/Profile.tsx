import {useForm} from "react-hook-form";
import Header from "../../components/header/Header.tsx";
import {Box, Button, MenuItem, Select, Stack, TextField} from "@mui/material";
import {useColors} from "../../common/theme/hooks/useMode.ts";
import useStoreUser from "../../hooks/useTeamData.ts";
import UnstyledSnackbarIntroduction from "../../components/snackbar/Snackbar.tsx";
import useSnackbar from "../../hooks/useSnackbar.ts";
import {yupResolver} from "@hookform/resolvers/yup";
import {useState} from "react";
import {schema} from "./schema.ts";
import {FormDataType} from "./types.ts";

function Profile() {
    const [role, setRole] = useState('user')

    const {addUser, teamMembers} = useStoreUser()
    const {setOpen} = useSnackbar()

    const colors = useColors()

    const {register, handleSubmit, reset,
        formState: {errors: {email, age, phone, name}}, } =
        useForm<FormDataType>({resolver: yupResolver(schema)})
    const onSubmit = (data: FormDataType) => {
        addUser({...data, id: teamMembers.length + 1})
        setOpen(true)
        reset()
    }

    return <>
        <Header title={'New Profile'} subtitle={'Add new profile to list'}/>
        <Box display={'flex'} flexDirection={'column'} mt={'2rem'} component={'form'}
             onSubmit={handleSubmit(onSubmit)} sx={{'& .MuiInputBase-root': {bgcolor: colors.primary[400]},
            '& .MuiFormHelperText-root': {color: colors.blueAccent[400]}}} noValidate>
            <Stack width={{md: '100%', lg: '60%'}} rowGap={2} direction={{sm: 'column', md: 'row'}} columnGap={2}>
                <TextField error={!!name} helperText={name?.message} fullWidth {...register('name', {required: true})} label={'Name'} type={'text'}/>
                <TextField error={!!age} helperText={age?.message} fullWidth {...register('age')} label={'Age'} type={'number'}/>
            </Stack>
            <Stack mt={'1rem'} width={{md: '100%', lg: '60%'}} rowGap={2} direction={{sm: 'column', md: 'row'}} columnGap={2}>
                <TextField error={!!email} helperText={email?.message} fullWidth {...register('email', {required: true})} label={'Email'} type={'email'}/>
                <TextField error={!!phone} helperText={phone?.message} fullWidth {...register('phone', {required: true})} label={'Phone Number'} type={'text'}/>
            </Stack>
            <Stack mt={'1rem'} width={{md: '100%', lg: '60%'}} direction={'row'} columnGap={2}>
                <Select
                    fullWidth
                    value={role} // You need to provide the value from form state here
                    {...register('access')}
                    label='Access Type'
                    onChange={(event) => setRole(event.target.value)}
                >
                    <MenuItem value='admin'>Admin</MenuItem>
                    <MenuItem value='manager'>Manager</MenuItem>
                    <MenuItem value='user'>User</MenuItem>
                </Select>
            </Stack>
            <Button sx={{bgcolor: colors.blueAccent[600], mt: '1rem', width: '10rem', p: '0.5rem 1rem',
                '&:hover': {bgcolor: colors.blueAccent[400]}, color: colors.grey[100]}} type={'submit'}>Submit Data</Button>
        </Box>
        <UnstyledSnackbarIntroduction/>
    </>
}

export default Profile;