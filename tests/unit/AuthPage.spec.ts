import { shallowMount } from '@vue/test-utils'
import AuthPage from "../../src/views/AuthPage/AuthPage.vue"

// teste simples, só pra testar o Babel
describe('Formulário de cadastro', () => {
  it('deve validar a entrada do nome de usuário corretamente', () => {
    const wrapper = shallowMount(AuthPage)
    const inputField = wrapper.findComponent({ name: 'InputField' })

    // Simulando entrada inválida
    inputField.vm.$emit('input', '123')

    // Verificando se o alerta foi exibido
    expect(window.alert).toHaveBeenCalledWith('Por favor, evite digitar números e espaços. Se houver dois nomes, digite apenas o primeiro. Agradecemos!')

    // Verificando se o valor do campo de entrada foi limpo
    expect(inputField.props('v-model')).toBe('')
  })
})
