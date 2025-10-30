//
//  ContentView.swift
//  test
//
//  Created by Meenu Tabassum Khan on 04/06/25.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Image(systemName: "globe")
                .imageScale(.large)
                .foregroundStyle(.tint)
            Text("Hello, Meenu")
                .font(.headline)
                .foregroundColor(Color.red)
                .frame(width: nil)
                
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
