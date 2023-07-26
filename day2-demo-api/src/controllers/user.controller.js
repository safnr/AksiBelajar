const userService = require('../services/user.service');
const jwt =  require('jsonwebtoken');

const register = async (req, res) => {
    const { body } = req;

    if ( !body.username || !body.email || !body.password ) {
        return res.status(400).json({
            status: 'fail',
            message: 'data anda tidak sesuai'
        });
    }

    try {
        const user = await userService.getUserByEmail(body.email);

        if(user[0][0]){
            return res.status(400).json({
                status: 'failed',
                mesaage: 'email yang digunakan sudah terdaftar'
            })
        }
        await userService.register(body);


        return res.status(201).json({
            status: 'success',
            message: 'data berhasil disimpan',
            data: body
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'fail',
            message: 'gagal menyimpan data anda'
        });
    }
}

const login = async (req, res) => {
    const { body } = req;

    if ( !body.email || !body.password ) {
        return res.status(400).json({
            status: 'fail',
            message: 'data anda tidak sesuai!'
        });
    }

    try {
        const user = await userService.login(body)       

        if (!user) {
            return res.status(400).json({
                status: 'fail',
                message: 'email dan password salah'
            })
        }

        const dataUser = user [0][0]

        const jwtToken = jwt.sign(
            {id: dataUser.id, email: dataUser.email},
            process.env.JWT_SECRET
        )

        return res.status(200).json({
            status: 'success',
            message: 'login berhasil',
            token: jwtToken,
            data: dataUser
        });
    } catch (error) {
        // console.log(error)
        return res.status(500).json({
            status: 'fail',
            message: 'login gagal'
        })
    }
}

const update = async (req, res) => {
    const id = req.params.id;
    const { body } = req;

    console.log(id)
    if ( !body.username || !body.email || !body.password ) {
        return res.status(400).json({
            status: 'fail',
            message: 'data anda tidak sesuai'
        });
    }

    try {
        await userService.update(id, body)

        return res.status(200).json({
            status: 'success',
            message: 'data berhasil diperbarui'
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'fail',
            message: 'gagal memperbarui data'
        })
    }
}

const viewUser = async (req, res) => {
    try {
        const [user] = await userService.viewUser()
        
        return res.status(200).json({
            status: 'success',
            message: 'data berhasil ditampilkan',
            data: user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'fail',
            message: 'gagal menampilkan data'
        })
    }
} 

const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await userService.deleteUser(id)

        return res.status(200).json({
            status: 'success',
            message: 'user berhasil dihapus'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'fail',
            message: 'user gagal dihapus'
        })
    }
}

module.exports = { register, login, update, viewUser, deleteUser }