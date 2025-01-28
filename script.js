// criação da timeline gsap com animações com o scroll

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.mid',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        //markers: true, //depuração
         },

    
});

tl.to(
    '#fanta',
    {
        top:'120%', //move o elemento com o id fanta para 120% do topo 
        left: '0%', //move o elemento 0% para a esquerda
    },
    'orange'

); //nomeando este trecho de animação como 'orange' para sincronização

tl.to(
    '#laranja-cortada',
    {
        top: '160%',
        left: '23%',
    },
    'orange'
);

tl.to(
    '#laranja',
    {
        width: '15%', // reduz a largura do elemento com id orange para 15
        top: '160%', // move o elemento para 160% do topo
        rigth: '23%',//move o elemento para 10% da direita
    },
    'orange'
);

tl.to(
    '#folha',
    {
        top: '110%', // move o elemento para 110% do topo
        rotate: '530deg',//rotaciona o elemento em 130 graus
        left: '70%',//move o elemento para 70% da esquerda
    },
    'orange'
);

tl.to(
    '#folha2',
    {
        top: '110%', // move o elemento para 110% do topo
        rotate: '530deg',//rotaciona o elemento em 130 graus
        left: '0%',//move o elemento para 0% da esquerda
    },
    'orange'
);

//segunda div

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".last",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})


tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
},
'ca'
);

tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 
'ca'
);

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 
'ca'
);

tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 
'ca'
);

tl2.to("#laranja-cortada",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 
'ca'
);

tl2.to("#fanta",{
    width:"35%",
    top: "210%",
    left: "33%",
}, 
'ca'
);