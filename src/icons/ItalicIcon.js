const ItalicIcon = {
    name: 'ItalicIcon',
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
                    render('line', {x1: "19", y1: "4", x2: "10", y2: "4"}),
                    render('line', {x1: "14", y1: "20", x2: "5", y2: "20"}),
                    render('line', {x1: "15", y1: "4", x2: "9", y2: "20"})
                ]
            )
        }
    }
}

export default ItalicIcon
