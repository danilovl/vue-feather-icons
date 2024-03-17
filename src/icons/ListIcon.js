const ListIcon = {
    name: 'ListIcon',
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
                    render('line', {x1: "8", y1: "6", x2: "21", y2: "6"}),
                    render('line', {x1: "8", y1: "12", x2: "21", y2: "12"}),
                    render('line', {x1: "8", y1: "18", x2: "21", y2: "18"}),
                    render('line', {x1: "3", y1: "6", x2: "3", y2: "6"}),
                    render('line', {x1: "3", y1: "12", x2: "3", y2: "12"}),
                    render('line', {x1: "3", y1: "18", x2: "3", y2: "18"})
                ]
            )
        }
    }
}

export default ListIcon
