const parentList = [
  {
    name: 'Marcos Maia',
    children: 'Clarice',
  },
  {
    name: 'João Paulo',
    children: 'Pedro',
  },
  {
    name: 'Fernanda',
    children: 'Rosa',
  },
  {
    name: 'Patricia',
    children: 'Ana',
  },
  {
    name: 'Lucas',
    children: 'Samira',
  },
];

function getParent(list, children) {
  list.filter((p) => {
    if (p.children === children) {
      console.log(p.name)
    }
  });
}

const parent = getParent(parentList, 'Pedro');


//a função deve retornar o nome do pai de acordo com o nome de seu filho passado no segundo parâmetro

//solução com o metodo find(), porém este metodo para no primeiro elemento de objeto que encontrar,
//tornando a função não viável para casos de pais com mesmo nome de filho
// getParent = (list, children) =>
//   list.find((p) => p.children === children).name;

// const parent = getParent(parentList, 'Pedro');

// console.log(parent);
