const DatabaseIcon = {
    name: 'DatabaseIcon',
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
                    render('ellipse', {cx: "12", cy: "5", rx: "9", ry: "3"}),
                    render('path', {d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),
                    render('path', {d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})
                ]
            )
        }
    }
}

export default DatabaseIcon
