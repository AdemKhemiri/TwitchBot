module.exports = {
    cmds: [
        {
            key: "!test",
            msg: "hello from test"
        }
    ],
    
    getCmds: function() {
        return this.cmds[0]
    }

}