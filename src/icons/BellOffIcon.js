const BellOffIcon = {
    name: 'BellOffIcon',
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
                    render('path', {d: "M13.73 21a2 2 0 0 1-3.46 0"}),
                    render('path', {d: "M18.63 13A17.89 17.89 0 0 1 18 8"}),
                    render('path', {d: "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"}),
                    render('path', {d: "M18 8a6 6 0 0 0-9.33-5"}),
                    render('line', {x1: "1", y1: "1", x2: "23", y2: "23"})
                ]
            )
        }
    }
}

export default BellOffIcon
