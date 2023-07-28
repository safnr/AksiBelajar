const userService = require('../services/user.service');
const jwt =  require('jsonwebtoken');

const createTodos = async (req, res) => {
    const { body } = req

    if ( !body.userId || !body.title === "" || !body.description === "" || !body.deadline ) {
        return res.status(400).json({
            status: 'fail',
            message: 'todo tidak boleh kosong!'
        });
    }

    try {
        const user = await userService.createTodos(body)

        const dataUser = user [0][0]

        const jwtToken = jwt.sign(
            {id: dataUser.id, title: dataUser.title},
            process.env.JWT_SECRET
        )

        return res.status(201).json({
            status: 'success',
            message: 'data berhasil disimpan',
            token: jwtToken,
            data: dataUser
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'fail',
            message: 'todo anda gagal dibuat'
        });
    }
}

const updateTodos = async (req, res) => {
    const id = req.params.id;
    const { body } = req;

    if ( !body.title == "" || !body.description == "" || !body.deadline ) {
        return res.status(400).json({
            status: 'fail',
            message: 'todo tidak boleh kosong!'
        });
    }

    try {
        await userService.updateTodos(id, body)

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

const viewTodo = async (req, res) => {
    const id = req.params.id;

    try {
        await userService.viewTodo(id)

        return res.status(200).json({
            status: 'success',
            message: 'berhasil menampilkan todo',
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'gagal menampilkan todo'            
        })
    }
}

const viewTodos = async (req, res) => {
    const userId = req.params.userId;
    
    try {
        const [user] = await userService.viewTodos(userId)

        return res.status(200).json({
            status: 'success',
            message: 'berhasil menampilkan todos',
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'gagal menampilkan todos'            
        })
    }
}

const deleteTodos = async (req, res) => {
    const id = req.params.id;

    try {
        await userService.deleteTodos(id)

        return res.status(200).json({
            status: 'success',
            message: 'berhasil menghapus todo'
        })
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'gagal menghapus todo'            
        })
    }
}


module.exports = { createTodos, updateTodos, viewTodo, viewTodos, deleteTodos }