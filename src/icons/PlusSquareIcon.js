const PlusSquareIcon = {
    name: 'PlusSquareIcon',
    props: {
        h: {
            type: Object,
            required: false
        },
        svg: {
            type: Object,
            required: false
        }
    },
    setup(props) {
        if (typeof h === 'undefined' && !props.h) {
            throw new TypeError('Vue h is not defined.')
        }

        const render = typeof h !== 'undefined' ? h : props.h

        const defaultSvg = {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round'
        }
        const svg = {...defaultSvg, ...(props?.svg ?? {})}

        return function () {
            return render('svg', svg, [
                    render('rect', {x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2"}),
                    render('line', {x1: "12", y1: "8", x2: "12", y2: "16"}),
                    render('line', {x1: "8", y1: "12", x2: "16", y2: "12"})
                ]
            )
        }
    }
}

export default PlusSquareIcon
