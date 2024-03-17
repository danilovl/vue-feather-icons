const CloudDrizzleIcon = {
    name: 'CloudDrizzleIcon',
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
                    render('line', {x1: "8", y1: "19", x2: "8", y2: "21"}),
                    render('line', {x1: "8", y1: "13", x2: "8", y2: "15"}),
                    render('line', {x1: "16", y1: "19", x2: "16", y2: "21"}),
                    render('line', {x1: "16", y1: "13", x2: "16", y2: "15"}),
                    render('line', {x1: "12", y1: "21", x2: "12", y2: "23"}),
                    render('line', {x1: "12", y1: "15", x2: "12", y2: "17"}),
                    render('path', {d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"})
                ]
            )
        }
    }
}

export default CloudDrizzleIcon
