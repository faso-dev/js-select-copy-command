class CHOCOStorm {

    /**
     * @param {NodeListOf<HTMLElement>} editorsHtmlElements
     */
    constructor(editorsHtmlElements) {
        this.editorsHtmlElements = editorsHtmlElements
    }

    listenForCopy() {
        this.editorsHtmlElements.forEach(editor => {
            editor.querySelector('.btn-copy').addEventListener('click', e => {
                e.preventDefault()
                CHOCOStorm.#selectAll(editor.querySelector('.code_block'))
                CHOCOStorm.#copy()
            })
        })
    }

    /**
     * @param {HTMLElement} code_block
     */
    static #selectAll(code_block) {
        window.getSelection().selectAllChildren(code_block);
    }

    static #copy() {
        document.execCommand("copy")
    }
}

window.onload = () => {
    const chocoStorm = new CHOCOStorm(document.querySelectorAll('.code_ide .editor'))
    chocoStorm.listenForCopy()
}
