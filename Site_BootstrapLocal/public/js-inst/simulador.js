function btn_propriedade() {
    propriedade.style.display = "block";
    terceiros.style.display = "none";
  }

  function btn_terceiros() {
    terceiros.style.display = "block";
    propriedade.style.display = "none";
  }

  function calcular_propriedade() {
    if(qt_sacas_p_id.value != "" && qt_sacas_p_id.value >0 &&
    desperdicio_porcentagem_id.value != "" && desperdicio_porcentagem_id.value>0 &&
    preco_mao_de_obra_p_id.value != "" && preco_mao_de_obra_p_id.value>0 &&
    valor_saca_p_id.value !="" && valor_saca_p_id.value>0){
    var qt_sacas = qt_sacas_p_id.value,
      desperdicio_porcentagem = desperdicio_porcentagem_id.value,
      preco_mao_de_obra = preco_mao_de_obra_p_id.value,
    valor_saca = valor_saca_p_id.value;

    var lucro_atual = ((qt_sacas * valor_saca) - ((qt_sacas * valor_saca) * (desperdicio_porcentagem / 100))) - preco_mao_de_obra;
    var lucro_total = ((qt_sacas * valor_saca) - ((qt_sacas * valor_saca) * (5 / 100))) - preco_mao_de_obra;
    var lucro_adicional = lucro_total - lucro_atual;

    gastoP.innerHTML = "R$" + preco_mao_de_obra;
    tag_lucro_total_p.innerHTML = "R$" + lucro_total;
    tag_lucro_atual_p.innerHTML = "R$" + lucro_atual;
    perda_porcentagem.innerHTML = desperdicio_porcentagem + "%";
    tag_lucro_adicional_p.innerHTML = "R$" + lucro_adicional;

    resposta1.style.display = 'block';
  }else{
    alert('Todos os campos devem estar preenchidos com dados válidos!');
    qt_sacas_p_id.value = "";
    desperdicio_porcentagem_id.value=""; 
    preco_mao_de_obra_p_id.value ="";
    valor_saca_p_id.value ="";
  }
  }

  function calcular_terceiros() {
    if(qt_sacas_c_id.value != "" && qt_sacas_c_id.value >0 &&
    preco_frete_id.value != "" && preco_frete_id.value >0 && 
    preco_mao_de_obra_c_id.value != "" &&  preco_mao_de_obra_c_id.value >0){
    var qt_sacas = qt_sacas_c_id.value,
      preco_frete = preco_frete_id.value,
      preco_mao_de_obra = preco_mao_de_obra_c_id.value;

    var lucro_atual = (qt_sacas * 50) - preco_frete - preco_mao_de_obra - ((qt_sacas*50)*((100-preco_frete)/100)) ;
    var lucro_total = (qt_sacas * 50) - preco_mao_de_obra;
    var lucro_adicional = lucro_total - lucro_atual;

    tag_lucro_atual_c.innerHTML = "R$" + lucro_atual;
    tag_lucro_total_c.innerHTML = "R$" + lucro_total;
    tag_lucro_adicional_c.innerHTML = "R$" + lucro_adicional;

    resposta2.style.display = 'block';
  } 
  else{
    alert('Todos os campos devem estar preenchidos com dados válidos!');
    qt_sacas_c_id.value ="";
    preco_frete_id.value="";
    preco_mao_de_obra_c_id.value="";

  }}