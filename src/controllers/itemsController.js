import {} from '../models/Item.js';


export function getItemById(req, res) {
    const item = find(i => i.id === parseInt(req.params.id));
    if (item) {
        res.status(200).send(item);
    } else {
        res.status(404).send({ message: "Item not found" });
    };
}

export function createItem(req, res) {
    const newItem = {
        id: length +1,
        name: req.body.name
    };
    push(newItem);
    res.status(201).send(newItem);
}

export function updateItem(req, res) {
    const item = find(i => i.id === parseInt(req.params.id));
    if (item) {
        item.name = req.body.name
        res.status(200).send(item);
    } else {
        res.status(404).send({message: "Item não encontrado "});
    };

}

export function deleteItem(req, res) {
    const index = findIndex(i => i.id === parseInt(req.params.id));
    if (index !== -1) {
        splice(index, 1);
        res.status(204).send();
    }else {
        res.status(404).send({message: "Item não encontrado"});
    };
}

