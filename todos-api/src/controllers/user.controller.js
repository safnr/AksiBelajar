const userService = require('../services/user.service');
const jwt =  require('jsonwebtoken');

const createTodos = async (req, res) => {
    const { body } = req;

    if (!body.userId || !body.title || !body.description || !body.deadline) {
        return res.status(400).json({
            status: 'failed',
            message: 'todo anda tidak sesuai',
        });
    }

    try {
        const user = await userService.getUserByUserId(body.userId);

        await userService.createTodos(body);

        const jwtToken = jwt.sign(
            { id: user.id, userId: user.userId },
            process.env.JWT_SECRET
        );

        return res.status(201).json({
            status: 'success',
            message: 'todo anda berhasil disimpan',
            token: jwtToken,
            data: body
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'failed',
            message: 'todo anda gagal dibuat',
        });
    }
};

const updateTodos = async (req, res) => {
    const id = req.params.id;
    const { body } = req;

    if ( !body.title || !body.description || !body.deadline ) {
        return res.status(400).json({
            status: 'failed',
            message: 'todo anda tidak sesuai!'
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
            status: 'failed',
            message: 'gagal memperbarui data'
        });
    }
}

const viewTodo = async (req, res) => {
    const id = req.params.id;

    try {
        const [user] = await userService.viewTodo(id);

        const jwtToken = jwt.sign(
            { id: user.id, userId: user.userId },
            process.env.JWT_SECRET
        );

        return res.status(200).json({
            status: 'success',
            message: 'berhasil menampilkan todo',
            token: jwtToken,
            data: user 
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'failed',
            message: 'gagal menampilkan todo'            
        });
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
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'failed',
            message: 'gagal menampilkan todos'            
        });
    }
}

const deleteTodos = async (req, res) => {
    const id = req.params.id;

    try {
        await userService.deleteTodos(id)

        return res.status(200).json({
            status: 'success',
            message: 'berhasil menghapus todo'
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'failed',
            message: 'gagal menghapus todo'            
        });
    }
}


module.exports = { createTodos, updateTodos, viewTodo, viewTodos, deleteTodos }