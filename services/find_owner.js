exports.extractOwner = (req)  => {
    const token = req.get('authorization').slice(7);
    const tokenPayload = token.split('.')[1];
    const decodedPayload = JSON.parse(global.atob(tokenPayload));
    return Object.values(decodedPayload)[0].userId;
}