export const cadastroView = `

 <div class="container">

            <section class="formulario-cadastro-intro">
                <h2>Faça Parte da Mudança</h2>
                <p>Preencha seus dados abaixo para se tornar um voluntário ou para receber nossa newsletter com novidades e formas de apoiar.</p>
            </section>

            <form action="#" method="post" class="form-cadastro">

                <fieldset>
                    <legend>Dados Pessoais</legend>

                    <div class="form-campo">
                        <label for="nome">Nome Completo:</label>
                        <input type="text" id="nome" name="nome_completo" required>
                    </div>

                    <div class="form-campo">
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" required placeholder="seuemail@dominio.com">
                    </div>

                    <div class="form-grupo-duplo">
                        <div class="form-campo">
                            <label for="cpf">CPF:</label>
                            <input type="text" id="cpf" name="cpf" 
                                   pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                                   placeholder="000.000.000-00" required>
                        </div>

                        <div class="form-campo">
                            <label for="telefone">Telefone / Celular:</label>
                            <input type="tel" id="telefone" name="telefone"
                                   pattern="\(\d{2}\) \d{4,5}-\d{4}"
                                   placeholder="(11) 98765-4321" required>
                        </div>
                    </div> <div class="form-campo">
                        <label for="nascimento">Data de Nascimento:</label>
                        <input type="date" id="nascimento" name="data_nascimento" required>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <div class="form-campo">
                        <label for="cep">CEP:</label>
                        <input type="text" id="cep" name="cep"
                               pattern="\d{5}-\d{3}"
                               placeholder="00000-000" required>
                    </div>

                    <div class="form-campo">
                        <label for="endereco">Endereço (Rua, Nº e Bairro):</label>
                        <input type="text" id="endereco" name="endereco" required>
                    </div>

                    <div class="form-grupo-duplo">
                        <div class="form-campo">
                            <label for="cidade">Cidade:</label>
                            <input type="text" id="cidade" name="cidade" required>
                        </div>

                        <div class="form-campo">
                            <label for="estado">Estado:</label>
                            <input type="text" id="estado" name="estado" required placeholder="Ex: SP" maxlength="2">
                        </div>
                    </div> </fieldset>
                
                <div class="form-actions"> <button type="submit" class="btn btn-primario">Enviar Cadastro</button>
                </div>

            </form>

        </div>
        
`;