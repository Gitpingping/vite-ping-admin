function render_verify_code(text = 'abcd'){
    const context = document.createElement('canvas');
    const ctx = context.getContext('2d');
    ctx.width = 100;
    ctx.height = 40;
    ctx.fillStyle = '#f00';
    return ctx.toDataURL()
}

module.exports = {
    render_verify_code
}