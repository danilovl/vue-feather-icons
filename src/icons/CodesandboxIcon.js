const CodesandboxIcon = {
    name: 'CodesandboxIcon',
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
                    render('path', {d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),
                    render('polyline', {points: "7.5 4.21 12 6.81 16.5 4.21"}),
                    render('polyline', {points: "7.5 19.79 7.5 14.6 3 12"}),
                    render('polyline', {points: "21 12 16.5 14.6 16.5 19.79"}),
                    render('polyline', {points: "3.27 6.96 12 12.01 20.73 6.96"}),
                    render('line', {x1: "12", y1: "22.08", x2: "12", y2: "12"})
                ]
            )
        }
    }
}

export default CodesandboxIcon
